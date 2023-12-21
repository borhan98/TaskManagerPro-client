import PropTypes from "prop-types";

const TaskListTitle = ({listTitle}) => {
    return (
        <h3 className="text-2xl font-semibold text-zinc-700">{listTitle}</h3>
    );
};

export default TaskListTitle;
TaskListTitle.propTypes = {
    listTitle: PropTypes.string.isRequired
}