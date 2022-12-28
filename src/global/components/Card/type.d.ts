export interface CardProps {
    types?: any;
    name?: any;
    data?: any;
    imageLoading?: boolean;
    setImageLoading: (prev: boolean) => void;
}