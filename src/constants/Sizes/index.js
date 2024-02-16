import { totalSize } from "@services/dimensions"
import { Platform } from "react-native"


const fontSize = {
  h1: totalSize(4.5),
  h2: totalSize(4),
  h3: totalSize(3.5),
  h4: totalSize(3),
  h5: totalSize(2.5),
  h5A: totalSize(2.25),
  h6: totalSize(2),
  input: totalSize(1.75),
  large: totalSize(2),
  medium: totalSize(1.75),
  regular: totalSize(1.65),
  small: totalSize(1.45),
  tiny: totalSize(1)
}
const sizes = {
  section: 25,
  TinyMargin: totalSize(0.5),
  smallMargin: totalSize(1),
  baseMargin: totalSize(2),
  doubleBaseMargin: 22,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 10,
  buttonSmallRadius: 5,
  buttonMiniRadius: 7,
  modalRadius: 15,
  cardRadius: 20,
  ModalRadius: 25,
  inputRadius: 5,
  smallImageRadius: 10,
  cameraBgHeight: 80,
  cameraBgWeidth: 80,
  CamBgRadius: 40,
}



export { fontSize, sizes }
