// import { useQuery } from 'react-query';

// const fetchMoroccoData = async () => {
//   const res = await fetch(
//     'https://disease.sh/v3/covid-19/countries/MA?yesterday=false&strict=true'
//   );
//   const data = await res.json();
//   return data;
// };

// export default function maroc() {
//   const { status, data, error } = useQuery('latest', fetchMoroccoData);
//   if (status === 'loading') return <div>Loading...please wait</div>;
//   if (status === 'error') return <div>{error}</div>;

//   return <div>{console.log(data)}</div>;
// }
