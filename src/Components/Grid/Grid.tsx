import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';

const Grid: FunctionComponent<{ children: ReactNode; container?: Boolean; item?: Boolean }> = ({ children, container, item }) => {

    return <div>{children}</div>

}

export default Grid