import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";



export const App = () => (
  <div className=" bg-gray-300">
    <Badge variant="pill" color="blue">Badge</Badge>
    <Badge variant="standard" color="red">Badge</Badge>
    <Badge variant="pill" color="green">Badge</Badge>
    <Badge variant="default" color="yellow">Badge</Badge>
    <Badge variant="pill" color="pink">Alert</Badge>
    <Badge variant="pill" color="turqoise">Badge</Badge>
    <Badge variant="default" color="indigo">Empty</Badge>
    <Banner variant="success" title="Congratulations">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam qui exercitationem, voluptate autem omnis unde, dicta aut odit aliquam accusamus mollitia soluta, cupiditate architecto amet non. Beatae, officiis exercitationem.</Banner>
    <Banner variant="neutral" title="Promocja">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam qui exercitationem, voluptate autem omnis unde, dicta aut odit aliquam accusamus mollitia soluta, cupiditate architecto amet non. Beatae, officiis exercitationem.</Banner>
    <Banner variant="error" title="There is a problem with your application">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam qui exercitationem, voluptate autem omnis unde, dicta aut odit aliquam accusamus mollitia soluta, cupiditate architecto amet non. Beatae, officiis exercitationem.</Banner>
    <Banner variant="neutral" title="Update available">Hi</Banner>
    <br />
    <br />
    <Card title="Easy Deployment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro, culpa assumenda sit inventore ad reprehenderit aspernatur.</Card>
    <br />
    <br />
    
    <Testimonial img="../public/May Anderson.jpeg" author="May Anderson" company="Workcation, CTO">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing olor sit amet consectetur adipisicing elit. Sednunc urna, sit.</Testimonial>
  </div>
);
