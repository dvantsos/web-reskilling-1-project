const LoadingPage = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 space-x-4">
            <div className="animate-spin h-16 w-16 border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-800">Loading...</p>
        </div>
    );
};

export default LoadingPage;