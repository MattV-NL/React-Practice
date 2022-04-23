import './tables.scss';
import { workForm } from '../../constants';

const WorkTable = () => {
  return (
    <div className='work-table'>
      <div className='work-table-header-row'>
        {workForm.map(({ title, id }) => (
          <div key={`${id}`}>{title}</div>
        ))}
      </div>
      <div className='work-table-body'>
        <div className='work-table-row'>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
        </div>
      </div>
    </div>
  );
};

export default WorkTable;
