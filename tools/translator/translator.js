import DA_SDK from 'https://da.live/nx/utils/sdk.js';

(async function init() {
  // eslint-disable-next-line no-unused-vars
  const { context, token, actions } = await DA_SDK;
  Object.keys(actions).forEach((key) => {
    const h3 = document.createElement('h3');
    h3.textContent = `${key}`;

    const para = document.createElement('p');
    para.textContent = actions[key];

    document.body.append(h3, para);
  });
  const p = document.createElement('p');
  document.body.append(p,token);
}());