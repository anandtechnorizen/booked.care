const About = () => {
  const tables = [{
    status: 'Age',
    info: '32'
  }, {
    status: 'City:',
    info: 'Brampton'
  }, {
    status: 'State:',
    info: 'North Holland'
  }, {
    status: 'Country:',
    info: 'Netherlands'
  }, {
    status: 'Postcode:',
    info: 'L6X 1A1'
  }, {
    status: 'Phone:',
    info: '(905) 555-1212'
  }, {
    status: 'Email:',
    info: '<a href="#" class="text-gray-800 hover:text-primary-active">to@jagshrn.com</a>'
  }];
  const renderTable = (table, index) => {
    return <tr key={index}>
        <td className="text-sm text-gray-600 pb-3.5 pe-3">{table.status}</td>
        <td className="text-sm text-gray-900 pb-3.5" dangerouslySetInnerHTML={{
        __html: table.info
      }} />
      </tr>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">About</h3>
      </div>

      <div className="card-body pt-4 pb-3">
        <table className="table-auto">
          <tbody>
            {tables.map((table, index) => {
            return renderTable(table, index);
          })}
          </tbody>
        </table>
      </div>
    </div>;
};
export { About };