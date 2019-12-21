import React from 'react';
import Axios from 'axios';

class NamespaceInputForm extends React.Component {
    state = {namespace: ''};

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await Axios.get(`http://localhost:8080/api/k8sclient/v1/namespace/${this.state.namespace}/deployment`);
        this.props.onSubmit(resp.data);
        this.setState({namespace: ''});
    };

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input type="text"
                       className="form-control mb-2 mr-sm-2 mb-sm-0"
                       id="inlineFormInput"
                       value={this.state.namespace}
                       onChange={event => this.setState({namespace: event.target.value})}
                       placeholder="Enter Namespace"
                       required
                />
                <button type="submit" className="btn btn-primary">Get Deployments</button>
            </form>
        );
    }
}

export default NamespaceInputForm
