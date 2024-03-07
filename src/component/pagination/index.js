import Pagination from "react-bootstrap/Pagination";

function PaginationComponent(props) {

  let active = props.currentPage||1;
  let items = [];
  for (let number = 1; number <= props.maxPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>props.handlePageChange({number})}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}

export default PaginationComponent;
