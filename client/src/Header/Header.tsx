// Styles
import { Wrapper } from './Header.styles';

type Props = {
    title: String;
}

const Header: React.FC<Props> = ({ title }) => (
    <Wrapper>
        <h1>{title}</h1>
    </Wrapper>
)

export default Header;