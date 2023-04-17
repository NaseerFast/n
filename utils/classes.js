
   
const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: 'rgb(23 23 23)',
    border: '1px solid rgb(71 85 105)',
    color:'white'
    
    
  
  },

  primaryColor: {
    backgroundColor: 'rgb(23 23 23)',
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },


  smallText: {
    fontSize: '15px',
  },

textWhite:{
color:"white",
// border: '1px solid #ffffff',

borderRadius: 1,

},
  main: {
    
    minHeight: '80vh',
   
    
  },
  footer: {
  
    textAlign: 'center',
    backgroundColor:'rgb(23 23 23)',
    paddingTop: '110px',
    paddingBottom:'4px'
    

  },
  appbar: {
    backgroundColor: ' rgb(253 224 71);',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'black'
  },
  navbarButton: {
    color: 'black',
    textTransform: 'initial',
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  resize: {
    padding: '0'
  } ,
  // search

  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  searchButton: {
    backgroundColor: '#f8c040',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
};

export default classes;

