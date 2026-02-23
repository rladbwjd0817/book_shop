import { Route, Routes } from 'react-router-dom'
import BasicLayout from './components/layout/BasicLayout'
import ManagerLayout from './components/layout/ManagerLayout'
import Join from './pages/member/Join'
import './reset.css'
import BookList from './pages/book/BookList'
import Login from './pages/member/Login'
import BookForm from './pages/book/BookForm'
import Webstorage from './study/Webstorage'
import { useState } from 'react'
import BookDetail from './pages/book/BookDetail'

function App() {

  // 로그인 정보를 저장하는 state 변수
  const [loginInfo, setLoginInfo] = useState({});

  // 


  return (
    <>
     <Routes>
      {/* localhost:5173 */}

      {/* Route를 아래와 같이 중복으로 사용하면 두 컴포넌트를 함께 띄울 수 있음. */}
      {/* 이때 컴포넌트에 접근하는 url은 바깥 Route와 안쪽 Route의 path로 나열로 지정 */}
      {/* Route 중복으로 쓰면서 path = ''  두개가 있으면 url 위 아래 합쳐져서 화면에 띄워줌*/}
      {/* 단 안쪽 Route의 path에는 '/' 생략하고, 화면에 띄울 컴포넌트 명으로 적음. */}
      {/* 바깥 컴포넌트에 <Outlet /> 컴포넌트를 사용하여 함께 열리는 컴포넌트의 위치를 지정한다.*/}

      {/* 일반회원이 접근하는 페이지들 */}
      <Route  path='/' element= {<BasicLayout setLoginInfo={setLoginInfo}/>}>
        {/* Web Storage 학습용 컴포넌트 */}
        <Route path='storage' element={<Webstorage/>}/>
        {/* 도서 목록 페이지, URL : localhost:5173*/}
        <Route path='' element= {<BookList />}/>
      
        {/* 회원가입 페이지, URL : localhost:5173/join */}
        <Route path='join' element={<Join />}/>

        {/* 로그인 페이지, URL : localhost:5173/login */}
        <Route path='login' element={<Login setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>}/>

        {/* 도서 상세 페이지, URL : localhost:5173/detail/3 */}
        <Route path='detail/:bookNum' element={<BookDetail />}/>


      </Route>

      {/* 홈페이지 운영자(매니저) 권한 회원이 접근하는 페이지들 */}
      <Route path='/manage' element={<ManagerLayout setLoginInfo = {setLoginInfo} />}>

        {/* 도서 등록 페이지, URL : localhost:5173/manage/book-form */}
        {/* URL에서 합성어는 '-' 사용*/}
        <Route path='book-form' element={ <BookForm /> }/>

        
      </Route>

     </Routes>
    </>
  )
}

export default App
