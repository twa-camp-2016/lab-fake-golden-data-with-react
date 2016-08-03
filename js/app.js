const App = React.createClass({
    getInitialState: function () {
        return {
            isPreview: true
        };
    },
    toggle: function() {
        this.setState({
            isPreview: !this.state.isPreview
        });
    },
    render: function () {
        const text = this.state.isPreview ? '编辑' : '预览';
        return <div>
            <button onClick={this.toggle}>{text}</button>
            <Editor className={this.state.isPreview ? "hidden" : ""} />
            <Preview className={this.state.isPreview ? "" : "hidden"} />
        </div>;
    }
});

const Editor = React.createClass({
    render: function () {
        return <div className={this.props.className}>Editor</div>;
    }
});

const Preview = React.createClass({
    render: function () {
        return <div className={this.props.className}>Preview</div>;
    }
});

ReactDOM.render(<App />, document.getElementById('content'));