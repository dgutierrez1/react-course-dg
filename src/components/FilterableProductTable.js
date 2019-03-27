// @flow
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'
import logo from '../logo.svg';
import _ from 'lodash'
import AddProductModal from './AddProductModal';
import { connect } from 'react-redux';
import { showAddProductModal } from '../redux/ActionCreators';

const styles = {
  card: {
    minWidth: 550,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  },
  title: {
    color: '#585373'
  }
};

const FilterableProductTable = (props) => {
  const { classes } = props;

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (e) => {
    const filterText = e.target.value
    setFilterText(filterText);
  }

  const handleInStockChange = () => {
    setInStockOnly(!inStockOnly);
  }

  const getProductsTableProps = () => {
    return {
      filterText,
      inStockOnly
    }
  }

  const openModal = () => {
    props.showAddProductModal(true);
  }


  useEffect(() => {
    document.title = filterText
  }, [filterText]);

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography component="h4" variant="h4" className={classes.title}>
              <i>SEARCHABLE PRODUCT TABLE</i> 
            </Typography>
          </div>
          <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={handleFilterTextChange}
            onInStockChange={handleInStockChange}
          />
          <ProductsTable {...getProductsTableProps()} />
        </CardContent>
        <CardActions>
          <Button onClick={openModal} size="small">ADD PRODUCT</Button>
        </CardActions>
      </Card>
      <AddProductModal />
    </React.Fragment>
  )
} 
const mapDispatchToProps = { showAddProductModal }

export default connect(null, mapDispatchToProps)(withStyles(styles)(FilterableProductTable));

