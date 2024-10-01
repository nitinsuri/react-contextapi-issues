import {useState} from react;

const useFetch = (url, delay=0) => {
  const [data, setData] = useState()
  const getData = async () => {
    const fetcher = await fetch(url)
    const captureResponse = await fetcher.json()
    console.log(captureResponse)
    setData(captureResponse)
  }
  return data
}

export default useFetch;