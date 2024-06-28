import {ViewNavBar} from "./component";

const UiBase = ({children, childNavBar}) => {
  return(
    <div style={{height: '100vh'}}>
      <ViewNavBar childNavBar={childNavBar}/>
      {children}
    </div>
  )
}
export default UiBase