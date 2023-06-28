import { Discuss } from "react-loader-spinner"
import styled from "styled-components"

const LoaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

export const Loader = () => {
    return (<LoaderWrapper>
        <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '999'
        }}
        wrapperClass="comment-wrapper"
        color="#fff"
        colors={['#526D82', '#526D82']}
    />
    </LoaderWrapper>)
}