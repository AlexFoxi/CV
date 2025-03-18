const CalculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const month = today.getMonth()

  if (
    month < birth.getMonth() ||
    (month === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--
  }

  return age
}

export default CalculateAge
