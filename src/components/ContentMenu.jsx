import '../style/contentMenu.css';

export function ContentMenu(props) {
    return (
        <div className="bar">
            <div className="filter-menu">
                <label htmlFor="mes">Mês:</label>
                <select name="mes" id="mes">
                    <option value="janeiro">Janeiro</option>
                    <option value="fevereiro">Fevereiro</option>
                    <option value="marco">Março</option>
                    <option value="abril">Abril</option>
                    <option value="maio">Maio</option>
                    <option value="junho">Junho</option>
                    <option value="julho">Julho</option>
                    <option value="agosto">Agosto</option>
                    <option value="setembro">Setembro</option>
                    <option value="outubro">Outubro</option>
                    <option value="novembro">Novembro</option>
                    <option value="dezembro">Dezembro</option>
                </select>

                <label htmlFor="ano">Ano:</label>
                <select name="ano" id="ano">
                    <option value="2021">2021</option>
                </select>

                <label htmlFor="decimoTerceiro">13ª :</label>
                <select name="decimoTerceiro" id="decimoTerceiro">
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                </select>
            </div>

            <div className="content-body">
                <div className="title-content">
                    <p>Conteúdo do Contra-cheque</p>
                    <div className="content-info">
                        Dados do contra-cheque
                    </div>
                </div>

            </div>
        </div>
    )
}