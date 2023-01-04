import CardTopSite from "../common/CardTopSite"
import DarbarSqr from "../../assets/images/cards/darbar_sqr.jpg"

type Props = {}

const TopSites = (props: Props) => {
  return (
    <div>
        <CardTopSite image={DarbarSqr} title="Kathmandu Darbar Square" />
    </div>
  )
}

export default TopSites