interface NotificationType {
    id: number;
    title: string;
    message: string;
    onPress?:()=>void;
    type?:'Error'|'Success'|'Warning';

}