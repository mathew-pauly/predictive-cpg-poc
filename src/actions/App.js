import axios from '../api/axios'

export const actions = {
    FETCH_QUESTIONS_INIT: 'fetch_questions_init',
    FETCH_QUESTIONS_COMPLETE: 'fetch_questions_complete',
    FETCH_QUESTIONS_ERROR: 'fetch_questions_error',
    SUBMIT_QUESTIONS_INIT: 'submit_questions_init',
    SUBMIT_QUESTIONS_COMPLETE: 'submit_questions_complete',
    SUBMIT_QUESTIONS_ERROR: 'submit_questions_error'
}

export const fetchQ = dispatch => {
  return async () => {
    try {
      dispatch({ type: actions.FETCH_QUESTIONS_INIT })
      const response = await axios.get('/FETCH_API');
      dispatch({ type: actions.FETCH_QUESTIONS_COMPLETE, payload: response.data })
    } catch (err) {
      dispatch({ type: actions.FETCH_QUESTIONS_ERROR, payload: err })
    }
  }
}

export const submitQ = dispatch => {
  return async (data) => {
    try {
      dispatch({ type: actions.SUBMIT_QUESTIONS_INIT })
      const response = await axios.post('/SUBMIT_API', data);
      dispatch({ type: actions.SUBMIT_QUESTIONS_COMPLETE, payload: response.data })
    } catch (err) {
      dispatch({ type: actions.SUBMIT_QUESTIONS_ERROR, payload: err })
    }
  }
}