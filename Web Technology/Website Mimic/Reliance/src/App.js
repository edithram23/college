import './App.css';
import Layout from './Layout';
import { Routes,Route } from 'react-router-dom';
import Story from './Story/Story';
import Company from './Company/Company';
import Careers from './Careers/Careers';
import Innovation from './Innovation/Innovation';
import Bussiness from './Bussiness/Bussiness';
function App() {
  return(
    // Routes to various components Layout(home page),Story,Company,Bussiness,Innovovation,Careets
      <Routes>
          <Route path='/' element={<Layout />}>                             
              <Route path='Story' element={<Story />}/>
              <Route path='Company' element={<Company/>}/>
              <Route path='Bussiness' element={<Bussiness/>}/>
              <Route path='Innovation' element={<Innovation/>}/>
              <Route path='Careers' element={<Careers/>}/>
          </Route>
      </Routes>
      
    );
}
/*
1.Yes,Reliance Industries limited has AI & DS roles in their Subsidiaries, roles like Data Scientist, ML Engineer etc.
2.RIL is involved in various sectors such as energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles
3.Excellence in AI & DS or ML etc.
4.Reliance Industries' growth will depend on how well they use their different businesses like Jio and retail, and how they adapt to changes and new technologies.
5.AI and DS could potentially disrupt Reliance Industries' sectors by optimizing operations and enhancing customer experiences through data-driven insights and automation.
6.Whether Reliance Industries will effectively use AI and DS to disrupt depends on how well they use these technologies for innovative solutions and improved operations.
7.Yes,Of course I would.
*/
export default App;
