// declare module '*.scss' {
//     interface IClassNames {
//         [className: string]: string;
//     }

//     const classNames: IClassNames;
//     export = classNames;
// }

declare module '*.scss' {
    const scss: any;
    export default scss
  }