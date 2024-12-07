
interface Props {
  children: React.ReactNode
}

const AuthLayout = ({children}:Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        { children }
      </div>
    </div>
  )
}

export default AuthLayout