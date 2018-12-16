import BugConstants from './BugConstants';

export default {
    listBugs: payload => {
        return {
            type: BugConstants.LIST_BUGS,
            payload
        }
    },
    listBugsError: error => {
        return {
            type: BugConstants.LIST_BUGS_ERROR,
            error
        }
    }
}