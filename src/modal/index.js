import ButtonToolbar from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
function modal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>
    );
}

export default modal;