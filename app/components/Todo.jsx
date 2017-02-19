var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {text} = this.props;
        var {id} = this.props;
        var {completed} = this.props;
        var {createdAt} = this.props;
        var {completedAt} = this.props;
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
                this
                    .props
                    .onToggle(id);
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

module.exports = Todo;