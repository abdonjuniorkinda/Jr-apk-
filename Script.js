# Fonction pour ajouter deux nombres
def addition(x, y):
    return x + y

# Fonction pour soustraire deux nombres
def soustraction(x, y):
    return x - y

# Fonction pour multiplier deux nombres
def multiplication(x, y):
    return x * y

# Fonction pour diviser deux nombres
def division(x, y):
    if y == 0:
        return "Erreur : Division par zéro"
    return x / y

def calculatrice():
    print("Sélectionnez une opération:")
    print("1. Addition")
    print("2. Soustraction")
    print("3. Multiplication")
    print("4. Division")

    choix = input("Entrez le numéro de l'opération (1/2/3/4): ")

    if choix in ['1', '2', '3', '4']:
        try:
            num1 = float(input("Entrez le premier nombre: "))
            num2 = float(input("Entrez le deuxième nombre: "))
        except ValueError:
            print("Erreur : Veuillez entrer un nombre valide.")
            return

        if choix == '1':
            print(f"{num1} + {num2} = {addition(num1, num2)}")
        elif choix == '2':
            print(f"{num1} - {num2} = {soustraction(num1, num2)}")
        elif choix == '3':
            print(f"{num1} * {num2} = {multiplication(num1, num2)}")
        elif choix == '4':
            print(f"{num1} / {num2} = {division(num1, num2)}")
    else:
        print("Choix invalide")

if __name__ == "__main__":
    calculatrice(
