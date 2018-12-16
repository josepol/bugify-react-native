import * as axios from 'axios';

import BugActions from './BugActions';
import Constants from '../../constants/Constant';

export default {
    listBugs: () => {
        return dispatch => axios.get(`${Constants.API.ENDPOINT}/bug/listAll`)
        .then(response => {
            return dispatch(BugActions.listBugs(response.data))
        })
        .catch(error => {
            return dispatch(BugActions.listBugsError(error))
        });
    }
}