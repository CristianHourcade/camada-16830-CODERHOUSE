class VirtualWallet {
    constructor() {
        this.transactions = []
        this.users = []
    }

    getTransactionsByUsername(username) {
        return this.transactions.filter(transaction => transaction.seller.username === username || transaction.buyer.username === username );
    }

    getBalanceByUsername(username){
        const ownTransactions = this.transactions.filter(transaction => transaction.seller.username === username);

        let acumulador = 0;
        ownTransactions.forEach(transaction => {
            acumulador += transaction.amount
        })
        return acumulador;
    }

    pushNewTransaction(transaction) {
        this.transactions.push(transaction)
    }

    signUpUser(user){
        this.users.push(user);
    }

}