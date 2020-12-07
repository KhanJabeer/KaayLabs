/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import './TableComp.css'
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from "react-redux";
import {getTimeTable} from "../Action/TableAction";
import {FILTER_TABLE} from "../Action/TableConstants";
import { Table } from 'react-bootstrap';
const TableComp = () => {
    const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTimeTable())
   
  },[])

  const tableDetails = useSelector(state => ({
     isLoading:state.loading,
     data:state.tabelData,
     
  }))
  
 

  const handlePageClick = ({ selected: selectedPage }) =>{
    setCurrentPage(selectedPage);
}
 
  
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(tableDetails.data.length / PER_PAGE);
 
  const currentPageData = tableDetails.data.slice(offset, offset + PER_PAGE) 


const storeStatus = (e) => {
 
    dispatch({
      type:FILTER_TABLE,
      payload:e.target.value
    })
}


  return(
    <div className="parent_class">
    <div className="header_wrap">
   <div className="table_header">Project Table</div>

   <div className="dropdown_wrap">
     <div className="dropdown_title">Status</div>
   <select onChange={(e) => storeStatus(e)} className="select_status">
   <option disabled selected value> -- Select An Status -- </option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>     
  </select>
  </div>

  </div>

  <div className="table_div">
  <Table striped bordered hover variant="dark">
<thead>
  <tr>
    <th scope="col">S.no</th>
    <th scope="col">Project Code</th>
    <th scope="col">Description</th>
    <th scope="col">Start Date</th>
    <th scope="col">End Date</th>
    <th scope="col">Company</th>
    <th scope="col">Status</th>
  </tr>
</thead>
<tbody>
  {currentPageData && currentPageData.isLoading ? <div className="loading">Loading....</div> :
  currentPageData.length > 0 && currentPageData.map((data,index) => {
    return(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{data.project_code}</td>
      <td>{data.description}</td>
      <td>{data.start_date}</td>
      <td>{data.end_date}</td>
      <td>{data.company_name}</td>
      <td>{data.status}</td>
  </tr>
    )
  })
 
}
</tbody>
</Table>
  </div>

<div className="pagination_div">
  <ReactPaginate
      previousLabel={"← Previous"}
      nextLabel={"Next →"}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination__link"}
      nextLinkClassName={"pagination__link"}
      disabledClassName={"pagination__link--disabled"}
      activeClassName={"pagination__link--active"}
    />

</div>
    </div>
  )
}

export default TableComp;