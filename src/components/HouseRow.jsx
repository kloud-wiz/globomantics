import { currencyFormatter } from "../helpers/currencyFormatter";

const HouseRow = ({house}) => {
    return(
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter(house.price)}</td>
        </tr>
    );
}

export default HouseRow;