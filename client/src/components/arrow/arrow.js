import React from 'react'

const Arrow =({ dir })=> {

    let color = '#c2c2a3'
    let rotate = '0'

    switch(dir){
        case 'desc':
            color = '#ff3333'
            rotate = '90'
            break;
        case 'asc':
            color = '#99ff33'
            rotate = '-90'
            break;
        default:
            break;
    }

    const style = {
        width: '3em',
        height: '3em',
        transform: `rotate(${rotate}deg)`,
        marginTop: 'auto',
        transition: '0.3s'
    }

    return (
        <div style={style}>
            <svg version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px"
                viewBox="0 0 31.143 31.143"
                fill={color}
            >
                    <g id="c100_arrow">
                        <path d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
                            c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
                            c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
                            l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                    </g>
            </svg>
        </div>
    )
}

export default Arrow