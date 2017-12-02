var initialState = {
  all: [
    {title:'iPhoneX Released', text:'Check out this new phone'},
  ]
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)

  switch (action.type){
    case 'POST_ADDED':
      console.log('POST_ADDED: ' + JSON.stringify(action.data))
      let all = Object.assign([], updated.all)
      all.push(action.data)
      updated['all'] = all
      return updated

    default:
      return updated
  }

}
