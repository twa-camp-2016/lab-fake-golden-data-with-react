const App = React.createClass({
    getInitialState: function () {
        return {
            isPreview: false,
            elements: []
        };
    },
    toggle: function() {
        this.setState({
            isPreview: !this.state.isPreview
        });
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({
            elements: elements
        });
    },
    removeElement: function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({
            elements: elements
        });
    },
    render: function () {
        const text = this.state.isPreview ? '编辑' : '预览';
        return <div>
            <button onClick={this.toggle}>{text}</button>
            <Editor className={this.state.isPreview ? "hidden" : ""} onAdd={this.addElement} onRemove={this.removeElement} elements={this.state.elements} />
            <Preview className={this.state.isPreview ? "" : "hidden"} elements={this.state.elements} />
        </div>;
    }
});

const Editor = React.createClass({
    add: function () {
        const element = $("input[name=elementType]:checked").val();
        this.props.onAdd(element);
    },
    remove: function (index) {
        this.props.onRemove(index);
    },
    render: function () {
        const previewElements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/><button onClick={this.remove.bind(this, index)}>X</button>
            </div>;
        });
        return <div className={this.props.className}>
            <div>
                {previewElements}
            </div>
            <div>
                <div>
                    <input type="radio" name="elementType" value="text" />文本
                    <input type="radio" name="elementType" value="date" />日期
                </div>
                <div>
                    <button onClick={this.add}>Add</button>
                </div>
            </div>
        </div>;
    }
});

const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/>
            </div>;
        });
        return <div className={this.props.className}>
            {elements}
            <button>Submit</button>
        </div>;
    }
});

ReactDOM.render(<App />, document.getElementById('content'));