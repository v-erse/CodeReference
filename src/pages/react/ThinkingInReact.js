import React, { Component } from "react";

/**
 * This is the code I've written to represent the example at:
 * https://reactjs.org/docs/thinking-in-react.html
 *
 * There are a few steps to take:
 * 1. Break the UI into a component hierarchy
 * 2. Build a static version in React (i.e. no state, no interactivity)
 * 3. Identify the minimal representation of UI state
 * 4. Identify where your state should live
 * 5. Add inverse data flow
 */

const PRODUCTS = [
    {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
    },
    {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
    },
    {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
    },
    {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
    },
    {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
    },
    {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
    }
];

export class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({ filterText });
    }

    handleInStockChange(inStockOnly) {
        this.setState({ inStockOnly });
    }

    render() {
        return (
            <div
                className="m-5 p-4"
                style={{ width: "18rem", border: "1px solid" }}
                id="FilterableProductTable"
            >
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

function SearchBar(props) {
    return (
        <form id="SearchBar">
            <input
                type="text"
                placeholder="Search..."
                value={props.filterText}
                onChange={e => {
                    props.onFilterTextChange(e.target.value);
                }}
            />
            <p>
                <input
                    type="checkbox"
                    checked={props.inStockOnly}
                    onChange={e => {
                        props.onInStockChange(e.target.checked);
                    }}
                />{" "}
                Only show products in stock
            </p>
        </form>
    );
}

function ProductTable(props) {
    const rows = [];
    let lastCategory = null;

    props.products.forEach(product => {
        if (product.name.indexOf(props.filterText) === -1) {
            return;
        }
        if (props.inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    return (
        <table id="ProductTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function ProductCategoryRow(props) {
    return (
        <tr id="ProductCategoryRow">
            <th colSpan="2">{props.category}</th>
        </tr>
    );
}

function ProductRow(props) {
    const product = props.product;
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
        <tr id="ProductRow">
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default FilterableProductTable;
