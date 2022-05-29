import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import axios from 'axios';


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

let data ;

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ?
  assets[entrypoint].css.map(asset=>
    `<link rel="stylesheet" href="${asset}">`
  ).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, ...extra) => {
  return assets[entrypoint] ? assets[entrypoint].js ?
  assets[entrypoint].js.map(asset=>
    `<script src="${asset}" ${extra.join(" ")}></script>`
  ).join('') : '' : '';
};

export const renderApp = (req, res) => {
  axios({
    method: 'get',
    url:`https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/${req?.params.id}`,
    
    }).then(async (response) => {
      data = response.data;
    })

  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );
  const baseHtml = `<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>CrowdWork</title>
    <meta property="og:url" content="https://crowdwork.dps-fpt.vn"/>
    <meta
      property="og:image"
      content="https://cdn.dribbble.com/users/403485/screenshots/4654515/media/1b08e8d8379300719a1a92b707935582.png"
      />
      <meta
      property="og:title"
      content="Nền tảng CrowdWork . Sứ mệnh tạo nên cộng đồng freelancers lớn mạnh ở khắp mọi nơi trên thế giới,"
      />
      <meta
      property="og:description"
      content="Nền tảng CrowdWork được phát triển bởi FPT Digital Processing Services (FPT DPS) với sứ mệnh tạo nên cộng đồng freelancers lớn mạnh ở khắp mọi nơi trên thế giới,"
      />
    <meta
      name="description"
      content="Nền tảng CrowdWork được phát triển bởi FPT(FPT DPS) với sứ mệnh tạo nên cộng đồng freelancers lớn mạnh ở khắp mọi nơi trên thế giới,"
      />
      ${cssLinksFromAssets(assets, 'client')}
  </head>
  <body>
      <div id="root">${markup}</div>
      ${jsScriptTagsFromAssets(assets, 'client', 'defer', 'crossorigin')}
  </body>
</html>`
const campaignHtml = `<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <title>${data?.title || 'CrowdWork'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:url" content="https://crowdwork.dps-fpt.vn"/>
    <meta
      property="og:image"
      content=${data?.avatar}
      />
      <meta
      property="og:title"
      content=${data?.title}
      />
      <meta
      property="og:description"
      content=${data?.details}
      />
    <meta
      name="description"
      content=${data?.details}
      />
      ${cssLinksFromAssets(assets, 'client')}
  </head>
  <body>
      <div id="root">${markup}</div>
      ${jsScriptTagsFromAssets(assets, 'client', 'defer', 'crossorigin')}
  </body>
</html>`

  return {context, baseHtml , campaignHtml};

  
}

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/', (req, res) => {
    const {context, baseHtml } = renderApp(req, res);
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(baseHtml);
    }
  })
  .get('/campaign-detail/:id', (req, res) => {
    const {context, campaignHtml} = renderApp(req, res);
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(campaignHtml);
    }
  })
  ;

export default server;
