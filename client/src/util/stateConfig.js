const states = [
    {
        id: 'Pending',
        colorName: 'gray',
        colorCode: '#F5F5F5',
        colorFontCode: '#8F8F8F',
        colorBorder: '#A3A3A3',
        enabled: false
    },
    {
        id: 'Running',
        colorName: 'blue',
        colorCode: '#EEF2FC',
        colorFontCode: '#406ddd',
        colorBorder: '#6387E3',
        enabled: false
    },
    {
        id: 'Rejected',
        colorName: 'red',
        colorCode: '#FCEEEE',
        colorFontCode: '#DB4343',
        colorBorder: '#E36363',
        enabled: true
    },
    {
        id: 'Complete',
        colorName: 'green',
        colorCode: '#F1FAF0',
        colorFontCode: '#62c757',
        colorBorder: '#7ED175',
        enabled: true
    },
    {
        id: 'Accepted',
        colorName: 'green',
        colorCode: '#F1FAF0',
        colorFontCode: '#62c757',
        colorBorder: '#7ED175',
        enabled: true
    }  
    ];

export default (state) => states.find( f => f.id == state);