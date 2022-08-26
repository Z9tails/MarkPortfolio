

export default function  Header(props){

    const navigation =["About", "Projects", "Contact"]

    function renderNavigation(){
        return (
          <div className="navigation">
            <div class="box is-align-content-flex-end">
              {navigation.map((tab) => (
                <ul>
                  {" "}
                  <div class="columns is-justify-content-right">
                    <a
                      href={"#" + tab.toLowerCase()}
                      onClick={() => props.setPage(tab)}
                    >
                      {tab}
                    </a>
                  </div>
                </ul>
              ))}
            </div>
          </div>
        );
    }

    return (
        <>
        {renderNavigation()}
        </>
    )
}