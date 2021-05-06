export default function actionCreator(type, ...argNames) {
    return function (...args) {
      const action = { type }
      argNames.forEach((_, index) => {
        action[argNames[index]] = args[index]
      })
      return action
    }
}