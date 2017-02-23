var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
    render: function () {
        var {text} = this.props;
        var {id} = this.props;
        var {completed} = this.props;
        var {createdAt} = this.props;
        var {completedAt} = this.props;
        var {dispatch} = this.props;
        var todoClassName = completed
            ? 'todo todo-completed'
            : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;
            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }
            return message + moment
                .unix(timestamp)
                .format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div
                className={todoClassName}
                onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>

            </div>
        );
    }
});
//connect todo component to store
export default connect()(Todo);