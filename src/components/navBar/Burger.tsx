import React from 'react';
import { motion, Transition } from 'framer-motion';

interface Props {
    open?: boolean;
    color?: string;
    strokeWidth?: string | number;
    transition?: Transition;
    lineProps?: any;
    width: number;
    height: number;
    onClick: React.MouseEventHandler;
}

const Burger = ({
    open = false,
    width = 24,
    height = 24,
    strokeWidth = 1,
    color = 'primary.dark',
    transition = null as any,
    lineProps = null,
    ...props
}: Props) => {
    const variant = open ? 'opened' : 'closed';
    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 2
        }
    };
    const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -2
        }
    };
    lineProps = {
        stroke: color,
        strokeWidth: strokeWidth as number,
        vectorEffect: 'non-scaling-stroke',
        initial: 'closed',
        animate: variant,
        transition,
        ...lineProps
    };
    const unitHeight = 4;
    const unitWidth = (unitHeight * (width as number)) / (height as number);

    return (
        <motion.svg
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            style={{ zIndex: '9999' }}
            {...props}>
            <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
            <motion.line x1="2" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
            <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
        </motion.svg>
    );
};

export default Burger ;
