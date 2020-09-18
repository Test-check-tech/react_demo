
const columns = [
    {
        title: 'selected',
        field: 'selected',
        show: true,
        filter: 'text',
        filterable:false
    },
    
    {
        title: 'ItemID',
        field: 'Item_Id',
        show: true,
        filter: 'text',
        filterable:false,
        
    },
    {
        title: 'Item name',
        field: 'Item name',
        show: true,
        filter: 'text'
    },
    {
        title: 'Item Type',
        field: 'Item Type',
        show: true,
        filter: 'text',filterable:false,
        
    },
    {
        title: 'Organization',
        field: 'Organization',
        show: true,
        filter: 'text',
        filterable:false
    },
    {
        title: 'Created Date',
        field: 'Created Date',
        show: true,
        filter: 'text',
        filterable:false
    },
    {
        title: 'Status',
        field: 'Status',
        show: true,
        filter: 'text',
        filterable:true
    },
    {
        title: 'Modified Date',
        field: 'Modified Date',
        show: true,
        filter: 'numeric',
        filterable:false
    },
    
];

export default columns;
