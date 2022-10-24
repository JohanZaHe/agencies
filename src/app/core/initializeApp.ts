export function initializeApp(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (localStorage.getItem('agenciesData')) {
        resolve(true);
      } else {
        getData(resolve);
      }
    }, 800);
  });
}

const getData = (resolve: Function) => {
  fetch('assets/data/agencies.json')
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('agenciesData', JSON.stringify(data));
      resolve(true);
    });
};
