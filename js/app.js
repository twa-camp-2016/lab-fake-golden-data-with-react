const App = React.createClass({
    getInitialState: function() {
        return {
            isEditor: true
        }
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        });
    },
    render: function() {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Preview" : "Edit"}</button>
            <div className={isEditor ? "" : "hidden"}>
                <Editor />
            </div>
            <div className={isEditor ? "hidden" : ""}>
                <Previewer />
            </div>
        </div>;
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>Editor</div>;
    }
});

const Previewer = React.createClass({
    render: function () {
        return <div>Previewer</div>;
    }
});



ReactDOM.render(<App />, document.getElementById('content'));