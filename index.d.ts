declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.avif';

declare module 'react-scroll' {
    import * as React from 'react';

    export interface LinkProps {
        to: string;
        spy?: boolean;
        smooth?: boolean | string;
        hashSpy?: boolean;
        offset?: number;
        duration?: number | ((distance: number) => number);
        delay?: number;
        isDynamic?: boolean;
        onClick?: () => void;
        onSetActive?: (to: string) => void;
        onSetInactive?: (to: string) => void;
        ignoreCancelEvents?: boolean;
        spyThrottle?: number;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }

    export class Link extends React.Component<LinkProps> {}
}
