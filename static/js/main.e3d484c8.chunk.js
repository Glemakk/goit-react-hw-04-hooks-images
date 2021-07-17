(this["webpackJsonpreact-app-start-package"]=this["webpackJsonpreact-app-start-package"]||[]).push([[0],{20:function(n,t,e){},46:function(n,t,e){"use strict";e.r(t);var a,o,i,r,c,s,p,l=e(0),d=e.n(l),u=e(5),g=e.n(u),h=(e(20),e(21),e(12)),b=e(6),x=e(7),f=e(9),m=e(8),j=e(10),O=e(3),v=e(4),w=v.a.header(a||(a=Object(O.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),k=v.a.form(o||(o=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),y=v.a.button(i||(i=Object(O.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),C=v.a.span(r||(r=Object(O.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),S=v.a.input(c||(c=Object(O.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),F=e(1),z=function(n){Object(f.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(b.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).state={img:""},n.handleChange=function(t){var e=t.target.value;n.setState({img:e.toLowerCase()})},n.handleSubmit=function(t){t.preventDefault();var e=n.state.img,a=n.props.onSubmit;""!==e.trim()?(a(e),n.clearForm()):j.b.warning("Tap some word for searching!")},n.clearForm=function(){n.setState({img:""})},n}return Object(x.a)(e,[{key:"render",value:function(){return Object(F.jsx)(w,{children:Object(F.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(F.jsx)(y,{type:"submit",children:Object(F.jsx)(C,{children:"Search"})}),Object(F.jsx)(S,{type:"text",name:"img",value:this.state.img,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),e}(l.Component),I=v.a.li(s||(s=Object(O.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),L=v.a.img(p||(p=Object(O.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));var M,E=function(n){var t=n.card,e=n.onClick;return Object(F.jsx)(I,{children:Object(F.jsx)(L,{src:t.webformatURL,alt:t.tags,id:t.id,onClick:function(){return e(t)}})})},T=v.a.ul(M||(M=Object(O.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])));var D,P=function(n){var t=n.searchQuery,e=n.onClick;return Object(F.jsx)(T,{children:t&&t.map((function(n){return Object(F.jsx)(E,{card:n,onClick:e},n.id)}))})},B=v.a.button(D||(D=Object(O.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:focus,\n  &:hover {\n    background-color: #303f9f;\n  }\n"]))),H=e(2),U=e.n(H);function A(n){var t=n.text,e=n.onClick,a=n.page,o=n.response;return Object(l.useEffect)((function(){a>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[a,o]),Object(F.jsx)(B,{type:"button",onClick:e,children:t})}A.defaultProps={onClick:function(){return null}},A.propType={onClick:U.a.func};var J,Q=A,R=e(14),_=e.n(R),q=v.a.div(J||(J=Object(O.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));var N,W,G=function(){return Object(F.jsx)(q,{children:Object(F.jsx)(_.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},K=v.a.div(N||(N=Object(O.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),V=v.a.div(W||(W=Object(O.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),X=function(n){var t=n.onClose,e=n.onOpen;Object(l.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.addEventListener("keydown",a)}}));var a=function(n){"Escape"===n.code&&t()};return Object(F.jsx)(K,{onClick:function(n){n.currentTarget===n.target&&t()},children:Object(F.jsx)(V,{children:Object(F.jsx)("img",{src:e.largeImageURL,alt:e.tags})})})},Y=function(n){Object(f.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(b.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).state={image:[],searchImage:null,page:1,loading:!1,error:null,showModal:!1,largeImage:""},n.onClickLoadMore=function(){n.setState((function(n){return{page:n.page+1}}))},n.modalShow=function(t){n.setState({showModal:!0,largeImage:t})},n.modalHide=function(){n.setState({showModal:!1})},n.onFormSubmit=function(t){n.setState({searchImage:t,page:1,image:[]})},n}return Object(x.a)(e,[{key:"componentDidUpdate",value:function(n,t){var e=this,a=this.state,o=a.searchImage,i=a.page;t.searchImage===o&&t.page===i||(this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(o,"&page=").concat(i,"&key=21790462-d81f7d941fc30814a1e9b910b&image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Word ".concat(e.state.searchImage," is not exist")))})).then((function(n){return e.setState((function(t){return{image:[].concat(Object(h.a)(t.image),Object(h.a)(n.hits))}}))})).catch((function(n){return e.setState({error:n})})).finally((function(){return e.setState({loading:!1})})))}},{key:"render",value:function(){var n=this.state,t=n.image,e=n.loading,a=n.error,o=n.showModal,i=n.largeImage,r=n.page;return Object(F.jsxs)("div",{className:"app",children:[a&&Object(F.jsx)("h1",{children:a.message}),Object(F.jsx)(z,{onSubmit:this.onFormSubmit}),Object(F.jsx)(P,{searchQuery:t,onClick:this.modalShow}),0!==t.length&&Object(F.jsx)(Q,{text:"Load more",page:r,response:t,onClick:this.onClickLoadMore,showModal:o}),e&&Object(F.jsx)(G,{}),o&&Object(F.jsx)(X,{onClose:this.modalHide,onOpen:i}),Object(F.jsx)(j.a,{position:"top-center",autoClose:2e3})]})}}]),e}(l.Component),Z=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,47)).then((function(t){var e=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),a(n),o(n),i(n),r(n)}))};g.a.render(Object(F.jsx)(d.a.StrictMode,{children:Object(F.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[46,1,2]]]);
//# sourceMappingURL=main.e3d484c8.chunk.js.map