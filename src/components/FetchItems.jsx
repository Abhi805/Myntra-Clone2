import { useSelector } from "react-redux";

const FetchItems =()=>{
 const fetchStatus = useSelector(store =>store.fetchStatus)

 console.log(fetchStatus)
 return <>
 <div>
   Fetch Done :{fetchStatus.fetchDone},
   currently fetching :{fetchStatus.currentlyFetching}
   </div>
 </>
}

export default FetchItems;