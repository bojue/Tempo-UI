declare namespace TdComponent{
    export interface TdButtonProps {
        theme: TDesign.THEME// 主题
        type: TDesign.Button_Type// 类型
        size: TDesign.Button_Size
        icon: any // icon
        content: any // 按钮内容
        disabled: boolean  // 是否禁用
        className: string
        
        // 事件
        click: () => void
    }
}